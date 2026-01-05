const fs = require('fs');
const path = require('path');

// Percorsi delle cartelle
const glbDir = path.join(__dirname, 'modelli', 'glb');
const usdzDir = path.join(__dirname, 'modelli', 'usdz');

// Funzione per leggere i file da una directory
function getFiles(dir) {
  try {
    if (!fs.existsSync(dir)) {
      return [];
    }
    return fs.readdirSync(dir)
      .filter(file => file.endsWith('.glb') || file.endsWith('.usdz'))
      .map(file => file.replace(/\.(glb|usdz)$/, ''));
  } catch (error) {
    console.error(`Errore nella lettura di ${dir}:`, error);
    return [];
  }
}

// Leggi tutti i file .glb
const glbFiles = getFiles(glbDir);
console.log('File .glb trovati:', glbFiles);

// Leggi tutti i file .usdz
const usdzFiles = getFiles(usdzDir);
console.log('File .usdz trovati:', usdzFiles);

// Crea la mappa dei modelli
const models = glbFiles.map(fileName => {
  const model = {
    id: fileName.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
    name: fileName.replace(/([A-Z])/g, ' $1').trim() || fileName,
    file: `modelli/glb/${fileName}.glb`,
    description: `Modello 3D: ${fileName}`
  };

  // Aggiungi il file .usdz se esiste
  if (usdzFiles.includes(fileName)) {
    model.iosFile = `modelli/usdz/${fileName}.usdz`;
  }

  return model;
});

// Genera il file JSON
const output = {
  models: models,
  generatedAt: new Date().toISOString()
};

const outputPath = path.join(__dirname, 'models.json');
fs.writeFileSync(outputPath, JSON.stringify(output, null, 2), 'utf8');

console.log(`\n✅ Generati ${models.length} modelli in ${outputPath}`);
console.log('\nModelli generati:');
models.forEach((model, index) => {
  console.log(`${index + 1}. ${model.name} (${model.file})`);
});
