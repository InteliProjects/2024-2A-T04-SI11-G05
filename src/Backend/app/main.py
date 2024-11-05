from fastapi import FastAPI
from app.routes import user, analysis, preprocessing

app = FastAPI()

# Incluindo rotas
app.include_router(user.router)
app.include_router(analysis.router)
app.include_router(preprocessing.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to my FastAPI application!"}
