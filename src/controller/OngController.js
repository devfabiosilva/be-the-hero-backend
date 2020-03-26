const connection = require('../database/connetion');
const crypto = require('crypto');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        //console.log(data);
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert(
            {
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            }
        );
    
        return response.json({ id });
    },

    async index(req, res) {
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    }
}