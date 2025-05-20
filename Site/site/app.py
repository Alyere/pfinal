from flask import Flask, render_template

app = Flask(__name__)

@app.route('templates/complexidade.html')
def complexidade():
    return render_template('complexidade.html')

@app.route('templates/sobre.html')
def sobre():
    return render_template('sobre.html')

@app.route('templates/ferramentas.html')
def ferramentas():
    return render_template('ferramentas.html')

@app.route('templates/dicas.html')
def dicas():
    return render_template('dicas.html')

@app.route('templates/mitos.html')
def mitos():
    return render_template('mitos.html')

if __name__ == '__main__':
    app.run(debug=True)
