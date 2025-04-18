from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torchvision.transforms as transforms
from PIL import Image
import io
import numpy as np
import torchxrayvision as xrv

app = Flask(__name__)
CORS(app)

# Load pre-trained model
model = xrv.models.DenseNet(weights="densenet121-res224-all")
model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.5], [0.5])
])

@app.route("/analyze", methods=["POST"])
def analyze_image():
    if 'image' not in request.files:
        return jsonify({"error": "No image file provided"}), 400
    
    image = request.files['image'].read()
    img = Image.open(io.BytesIO(image)).convert("L")  # Grayscale
    img = transform(img).unsqueeze(0)

    with torch.no_grad():
        output = model(img)

    predicted = output[0].numpy().tolist()

    return jsonify({"predictions": predicted})

if __name__ == '__main__':
    app.run(debug=True)
