import CreateSessionService from "../services/sessions/CreateSessionService.js";

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const token = await CreateSessionService.execute(email, password);

    return response.status(200).json({ token: token });
  }
}

export default SessionController;
