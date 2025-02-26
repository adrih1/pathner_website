import { useState } from 'react';

export default function EarlyAccessForm() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                setMessage('Merci ! Vous avez été ajouté à la liste d\'attente.');
                setEmail('');
            } else {
                setMessage(data.error || 'Une erreur est survenue.');
            }
        } catch (error) {
            setMessage('Une erreur est survenue.');
        }
    };

    return (
        <div className="p-4">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
                <label htmlFor="email">Rejoignez la liste d'attente :</label>
                <input
                    style={{ backgroundColor: 'var(--neutral)' }}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Votre email"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    Envoyer
                </button>
                {message && <p className="mt-2 text-sm">{message}</p>}
            </form>
        </div>
    );
}
