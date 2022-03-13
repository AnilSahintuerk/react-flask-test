from flask import Flask, jsonify
from flask_restful import reqparse, abort, Api, Resource
from config import api, db, app
from database import Artist


# ARTISTS = [{'name': 'Salvador Dali'}, {'name':'Leonardo DaVinci'}, {'name':'Vincent Van Gogh'}]

parser = reqparse.RequestParser()
parser.add_argument('name')
parser.add_argument('id')



class Artists(Resource):
    def get(self):
        return jsonify(Artist.query.all())
    
    def post(self, age=30):
        args = parser.parse_args()
        aName = args['name']
        
        if aName == '':
            return
        
        artist = Artist(name=aName, age=age)
        db.session.add(artist)
        db.session.commit()
        return
    
    def delete(self):
        args = parser.parse_args()
        artistId = args['id']
        delArtist = Artist.query.filter_by(id=artistId).first()
        print(delArtist)
        db.session.delete(delArtist)
        db.session.commit()
        return
    
    
api.add_resource(Artists, '/artists')

if __name__ == '__main__':
    app.run(debug=True)