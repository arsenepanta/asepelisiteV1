from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    DATABASE_URL: str = "sqlite:///./asepeli.db"
    SECRET_KEY: str = "asepeli-secret-key-2026"
    ENVIRONMENT: str = "development"
    WHATSAPP_API_URL: str = ""
    WHATSAPP_TOKEN: str = ""
    ADMIN_PHONE: str = ""

    class Config:
        env_file = ".env"

settings = Settings()
