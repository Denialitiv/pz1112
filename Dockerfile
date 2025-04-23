FROM python:3.11-slim-buster

WORKDIR /app

COPY replacement_task.py /app/

CMD ["python", "/app/replacement_task.py"]