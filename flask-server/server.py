from flask import Flask, jsonify
from flask_restful import reqparse, abort, Api, Resource
from config import api, db, app
from database import Artist


# ARTISTS = [{'name': 'Salvador Dali'}, {'name':'Leonardo DaVinci'}, {'name':'Vincent Van Gogh'}]

class Artists(Resource):
    def get(self):
        return jsonify(Artist.query.all())
    
    
api.add_resource(Artists, '/artists')

if __name__ == '__main__':
    app.run(debug=True)