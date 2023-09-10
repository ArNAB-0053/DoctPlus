from flask import Flask, render_template, request
import DiabetesPrediction as dp
import HeartDiaseasePrediction as hdp
import ParkinsonsDiseasePrediction as pdp

app = Flask(__name__)

diabetes_predictor = dp.DiabetesPredictor()
diabetes_predictor.load_data('Dataset/diabetes.csv')


heart_predictor = hdp.HeartDiseasePredictor()
heart_predictor.load_data('Dataset/heart.csv')

parkinsons_predictor = pdp.ParkinsonsPredictor()
parkinsons_predictor.load_data('Dataset/parkinsons.csv')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/diabetes_form', methods=['GET'])
def diabetes_form():
    return render_template('diabetes.html')

@app.route('/diabetes', methods=['POST'])
def predict_diabetes():
    features = [float(x) for x in request.form.values()]
    result = diabetes_predictor.predict(features)

    return render_template('diabetes.html', prediction=result)

@app.route('/heart_form', methods=['GET'])
def heart_form():
    return render_template('heart.html')

@app.route('/heart', methods=['POST'])
def predict_heart():
    features = [float(x) for x in request.form.values()]
    result = heart_predictor.predict(features)

    return render_template('heart.html', prediction=result)

@app.route('/parkinsons_form', methods=['GET'])
def parkinsons_form():
    return render_template('parkinsons.html')

@app.route('/parkinsons', methods=['POST'])
def predict_parkinsons():
    features = [float(x) for x in request.form.values()]
    result = parkinsons_predictor.predict(features)

    return render_template('parkinsons.html', prediction=result)

@app.route("/profile")
def profile():
    return render_template("profile.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/signup")
def signup():
    return render_template("signup.html")

@app.route("/disease")
def disease():
    return render_template("disease.html")
    
@app.route("/patientDetails")
def patientDetails():
    return render_template("patientDetails.html")

if __name__ == '__main__':
    app.run(debug=True)
    # app.run(host="0.0.0.0", port=5000)
