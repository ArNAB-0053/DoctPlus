import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn import svm

class ParkinsonsPredictor():
    def __init__(self):
        self.model = None

    def load_data(self, data_path):
        parkinsons_data = pd.read_csv(data_path)
        X = parkinsons_data.drop(columns=['name', 'status'], axis=1)
        Y = parkinsons_data['status']
        X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state=2)
        self.model = svm.SVC(kernel='linear')
        self.model.fit(X_train, Y_train)

    def predict(self, input_data):
        input_array = np.asarray(input_data)
        input_reshaped = input_array.reshape(1, -1)
        prediction = self.model.predict(input_reshaped)

        if prediction[0] == 0:
            return "The person does not have Parkinson's disease"
        else:
            return "The person has Parkinson's disease"