const connection = require('../database/connetion');


module.exports = {
    async create(request, response) {
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();
        
        if (!ong) {
            return response.status(404).json({ "error": "No ONG found with this ID" });
        }

        return response.json(ong);
    }
}