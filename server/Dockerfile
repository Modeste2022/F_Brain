FROM python:3.11-slim
WORKDIR /app
RUN pip install poetry
COPY . . 
RUN poetry config virtualenvs.create false && poetry install --no-root
EXPOSE 8000
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
