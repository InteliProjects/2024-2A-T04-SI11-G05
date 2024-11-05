from pydantic import BaseModel

# User schema for validation
class User(BaseModel):
    id: int
    name: str
    email: str