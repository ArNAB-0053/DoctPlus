import numpy as np
import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

class HeartDiseasePredictor():
    def __init__(self):
        self.model = None

    def load_data(self, data_path):
        heart_data = pd.read_csv(data_path)
        X = heart_data.drop(columns='target', axis=1)
        Y = heart_data['target']
        x_train, x_test, y_train, y_test = train_test_split(X, Y, train_size=0.8, stratify=Y, random_state=2)
        self.model = LogisticRegression()
        self.model.fit(x_train, y_train)

    def predict(self, input_data):
        input_array = np.asarray(input_data)
        input_reshape = input_array.reshape(1, -1)
        prediction = self.model.predict(input_reshape)

        if prediction[0] == 0:
            return "The person does not have heart disease"
        else:
            return "The person has heart disease"