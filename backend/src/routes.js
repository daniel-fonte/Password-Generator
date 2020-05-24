import { Router } from 'express';

const routes = Router();

routes.post('/', (req, res) => {
  try {
    const {
      Length, Uppercase, Numbers, Symbols,
    } = req.body;

    if (Length <= 2) {
      return res.json({ error: 'Password length minimum 3' });
    }

    const randomNumber = (min, max) => {
      const minBetween = Math.ceil(min);
      const maxBetween = Math.floor(max);
      const random = Math.floor(Math.random() * (maxBetween - minBetween + 1)) + minBetween;

      return random;
    };

    const generateCharacteres = (length, min, max) => {
      let characteres = '';
      for (let i = 0; i < length; i += 1) {
        characteres += String.fromCharCode(randomNumber(min, max));
      }

      return characteres;
    };

    const possibles = {
      // based on ASCII table
      alphabetize: generateCharacteres(Length, 97, 122),
      alphabetizeUpper: generateCharacteres(Length, 65, 90),
      numerical: generateCharacteres(Length, 48, 57),
      symbols: '!@#$&*=(){}[]<>|/?',
    };

    const suffle = (possiblesList, length) => {
      let password = '';

      if (Uppercase) {
        for (let i = 0; i < length; i += 1) {
          const alphaUpper = possiblesList.alphabetize.concat('', possiblesList.alphabetizeUpper);
          password += alphaUpper.charAt(randomNumber(alphaUpper.length, 0));
        }
      } else if (Numbers) {
        for (let i = 0; i < length; i += 1) {
          const alphaNumerical = possiblesList.alphabetize.concat('', possiblesList.numerical);
          password += alphaNumerical.charAt(randomNumber(alphaNumerical.length, 0));
        }
      } else if (Symbols) {
        for (let i = 0; i < length; i += 1) {
          const symbols = possiblesList.alphabetize.concat('', possiblesList.symbols);
          password += symbols.charAt(randomNumber(symbols.length, 0));
        }
      } else {
        password += possiblesList.alphabetize;
      }

      return password;
    };

    const password = suffle(possibles, Length).toString();

    return res.json({ password });
  } catch (error) {
    return res.json({ error });
  }
});

export default routes;
