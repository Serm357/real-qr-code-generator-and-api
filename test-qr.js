const QRCode = require('qrcode');

async function test() {
  try {
    const url1 = await QRCode.toDataURL('test', { color: { dark: '000000', light: 'ffffff' } });
    console.log('Without hash:', url1.substring(0, 50));
  } catch (e) {
    console.error('Without hash failed:', e.message);
  }

  try {
    const url2 = await QRCode.toDataURL('test', { color: { dark: '#000000', light: '#ffffff' } });
    console.log('With hash:', url2.substring(0, 50));
  } catch (e) {
    console.error('With hash failed:', e.message);
  }
  
  try {
    const url3 = await QRCode.toDataURL('test', { color: { dark: '#000000', light: '#00000000' } });
    console.log('Transparent hash:', url3.substring(0, 50));
  } catch (e) {
    console.error('Transparent hash failed:', e.message);
  }
}

test();
