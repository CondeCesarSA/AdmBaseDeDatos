from flask import Blueprint, render_template

contacts = Blueprint('contacts',__name__)

@contacts.route("/")
def home():
    return render_template('index.html')

@contacts.route('/new')
def add_contact():
    return "saving a contact"

@contacts.route("about")
def about():
    return render_template('about.html')

@contacts.route('/update')
def update():
    return "actualizando a contact"

@contacts.route('/delete')
def delete():
    return "delete a contact"