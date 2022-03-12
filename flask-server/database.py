from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import api, db, app
from dataclasses import dataclass

@dataclass
class Artist(db.Model):
    id: int
    name: str
    age: int
    
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), unique=True, nullable=False)
    age = db.Column(db.Integer, nullable=False)

    def __repr__(self):
        return '<Artist %r>' % self.name
    
# db.create_all()