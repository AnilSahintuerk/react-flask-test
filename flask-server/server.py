from flask import Flask
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)


ARTISTS = [{'name': 'Salvador Dali'}, {'name':'Leonardo DaVinci'}, {'name':'Vincent Van Gogh'}]

class Artists(Resource):
    def get(self):
        return {'artists': ARTISTS}
    
    
api.add_resource(Artists, '/artists')

if __name__ == '__main__':
    app.run(debug=True)