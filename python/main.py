import os
from dotenv import load_dotenv

import json
import random
import re

from atproto import Client

load_dotenv()

# Load data
with open("../data/dictionary.json", encoding="utf-8") as file:
    data = json.load(file)

# Load templates
with open("../data/templates.json", encoding="utf-8") as file:
    templates = json.load(file)["templates"]

def generate():
    # Select random template
    template = random.choice(templates)

    # Populate sentence with random words
    sentence = re.sub(
        r"\{(\w+)\}",
        lambda match: random.choice(data[match.group(1)]),
        template
    )

    # Capitalize first letter
    sentence = sentence[0].upper() + sentence[1:]
    return sentence

def main():
    client = Client()
    client.login(
        os.environ["BLUESKY_HANDLE"],
        os.environ["BLUESKY_APP_PASSWORD"]
    )
    message = generate()
    client.send_post(generate())

if __name__ == "__main__":
    main()