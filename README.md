# Adele Backoffice – Full Stack Application

This project is a containerized full-stack web application built with:

- **Angular** (Frontend)
- **Flask** (Backend)
- **MongoDB** (Database)
- **Docker Compose** (Orchestration)

---

## Getting Started (Deployment)

### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Quick Start

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/Adele-Backoffice.git
    cd Adele-Backoffice
    ```

2. **Build and start all services:**

    ```bash
    docker compose up --build
    ```

3. **Access the app:**
    - Frontend: [http://localhost:4200](http://localhost:4200)
    - Backend API: [http://localhost:8080](http://localhost:5000)
    These are the pre-defined user accounts available after deployment. Each role has specific authorizations:

    | Role              |  Username | Authorizations                                      |
    |-------------------|-----------|-----------------------------------------------------|
    | ADMIN             |  admin    | Full access: manage users, settings, and all data   |
    | TRE-OPERATOR      |  operator | Manage staff, view reports, limited admin features  |
    | OUTPUT-VALIDATOR  | validator | Basic access: view and update own data              |

     Passwords are securely hashed in the database. Default passwords are:
     - admin: admin123
     - manager: manager123
     - user: user123
     Change passwords in production for security.


---

## Development

### Frontend

To run the Angular frontend locally:

```bash
cd backoffice-tre
npm install
ng serve
```

Visit [http://localhost:4200](http://localhost:4200) in your browser.

### Backend

To run the Flask backend locally:

```bash
cd backend
pip install -r requirements.txt
python server.py
```

The API will be available at [http://localhost:5000](http://localhost:5000).

---

## Docker Compose Details

Make sure your `docker-compose.yml` includes services for frontend, backend, and MongoDB. Example service names:

- `frontend` (Angular + Nginx)
- `backend` (Flask)
- `mongo` (MongoDB)

---

## Notes

- Default credentials are listed above.
- If you change ports or environment variables, update them in `.env` files and `docker-compose.yml`.
- For troubleshooting, check logs with:

    ```bash
    docker compose logs
    ```

---

## Additional Resources

- [Angular CLI Documentation](https://angular.dev/tools/cli)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Docker Compose Reference](https://docs.docker.com/compose/)

---

Enjoy using Adele
