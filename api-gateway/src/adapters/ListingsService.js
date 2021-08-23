from api.menus import menus
from ingredient.menu import ingredient_api
from models import models

from config import config
app = Flask(__name__)
app.config.from_object('config.config.DevelopmentConfig')

app.register_blueprint(menu_api)