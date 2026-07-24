# 🧮 Flask Calculator

A simple and responsive calculator built using **HTML, CSS, JavaScript**, and served with **Flask**. The calculator supports basic arithmetic operations along with percentage, square root, and exponent calculations.

---

## 🚀 Features

* ➕ Addition
* ➖ Subtraction
* ✖️ Multiplication
* ➗ Division
* % Percentage
* √ Square Root
* ^ Exponent (Power)
* AC (Clear Screen)
* Responsive and clean UI

---

## 🛠️ Technologies Used

* Python 3
* Flask
* HTML5
* CSS3
* JavaScript
* Gunicorn (for deployment)

---

## 📂 Project Structure

```text
calculator-flask/
│
├── app.py
├── requirements.txt
├── README.md
│
├── templates/
│   └── index.html
│
└── static/
    ├── style.css
    ├── utility.css
    └── script.js
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd calculator-flask
```

### 2. Create a virtual environment (Optional)

**Windows**

```bash
python -m venv venv
venv\Scripts\activate
```

**Linux/macOS**

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Run the Application

```bash
python app.py
```

Open your browser and visit:

```
http://127.0.0.1:5000
```

---

## 🌐 Deploying

### Build Command

```bash
pip install -r requirements.txt
```

### Start Command

```bash
gunicorn app:app
```

---

## 📋 Requirements

```
Flask==3.1.1
gunicorn==23.0.0
```

---

## 📸 Preview

A modern calculator interface with support for:

* Basic arithmetic
* Percentage calculations
* Square root
* Power operations
* Clear function

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Commit your changes.
4. Push the branch.
5. Open a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed with ❤️ using Flask, HTML, CSS, and JavaScript.
