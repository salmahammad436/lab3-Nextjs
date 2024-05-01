import { morningText } from '@component/Data/textMorning';

export default function deleteAndUpdateText(req, res) {
  if (req.method === 'DELETE') {
    const { textId } = req.query;
    const foundedIndex = morningText.findIndex((text) => text.id.toString() === textId);
    if (foundedIndex !== -1) {
      morningText.splice(foundedIndex, 1);
    }
    res.status(200).json(morningText);
  } 
  else if (req.method === 'PUT') {
    const { textId } = req.query;
    const { newText } = req.body;

    const updatedText = morningText.find((text) => text.id.toString() === textId);
    if (updatedText) {
      updatedText.text = newText;
    
      
      res.status(200).json(updatedText);
    } else {
      res.status(404).json({ error: 'not foundd' });
    }
  }
}