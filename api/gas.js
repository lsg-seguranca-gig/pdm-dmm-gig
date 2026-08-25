export default async function handler(req, res) {
  // Substitua pela sua URL real do Web App do Google Apps Script
  const GAS_URL = "https://script.google.com/macros/s/AKfycbwHn4_GnZrZ0DZoydDfDLV7011ut6GaBhD7nvkOK2ki4bnn4Pf0w-fTfLD521NWQ0Uj/exec";

  try {
    if (req.method === 'POST') {
      const response = await fetch(GAS_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req.body)
      });
      const data = await response.json();
      return res.status(200).json(data);
    } 
    
    if (req.method === 'GET') {
      const queryString = new URLSearchParams(req.query).toString();
      const finalUrl = queryString ? `${GAS_URL}?${queryString}` : GAS_URL;
      
      const response = await fetch(finalUrl);
      const data = await response.json();
      return res.status(200).json(data);
    }

    return res.status(405).json({ status: 'error', message: 'Método não permitido.' });
  } catch (err) {
    return res.status(500).json({ status: 'error', message: err.toString() });
  }
}
