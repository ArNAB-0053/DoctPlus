import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression

class DiabetesPredictor():
    def __init__(self):
        self.model = None

    def load_data(self, data_path):
        diabetes_dataset = pd.read_csv(data_path)
        X = diabetes_dataset.drop(columns='Outcome', axis=1)
        Y = diabetes_dataset['Outcome']
        self.model = LogisticRegression()
        self.model.fit(X, Y)

    def predict(self, input_data):
        input_data = np.asarray(input_data)
        input_data_reshaped = input_data.reshape(1, -1)
        prediction = self.model.predict(input_data_reshaped)

        if prediction[0] == 0:
            return 'The person is not diabetic'
        else:
            return 'The person is diabetic'