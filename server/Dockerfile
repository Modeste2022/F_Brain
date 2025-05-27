FROM python:3.11-slim
WORKDIR /app
RUN pip install poetry
RUN pip install django-cors-headers
COPY pyproject.toml ./
RUN poetry config virtualenvs.create false \
    && poetry install --no-root
COPY . .
EXPOSE 8000
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
