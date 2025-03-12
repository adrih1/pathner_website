import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ error: 'Email is required' });
        }

        try {
            // Configurer le transporteur SMTP
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER, // Votre email
                    pass: process.env.EMAIL_PASS, // La clé d'application générée
                },
            });

            // Email pour vous notifier
            const notificationMailOptions = {
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER, // Votre propre email
                subject: 'Early Access - Nouvel inscrit',
                text: `Nouvel utilisateur inscrit : ${email}`,
            };

            // Email pour l'utilisateur
            const userMailOptions = {
                from: process.env.EMAIL_USER,
                to: email, // L'email de l'utilisateur
                subject: 'Bienvenue sur RexploR !',
                text: `Bonjour et merci de nous rejoindre ! Nous sommes ravis de vous avoir avec nous. Vous serez parmi les premiers informés de nos actualités.`,
                html: `<p>Bonjour et merci de nous rejoindre !</p>
                       <p>Nous sommes ravis de vous avoir avec nous. Vous serez les premiers informés de nos actualités.</p>`,
            };

            // Envoyer les deux emails
            await transporter.sendMail(notificationMailOptions);
            await transporter.sendMail(userMailOptions);

            res.status(200).json({ message: 'Emails envoyés avec succès' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erreur lors de l\'envoi des emails' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
