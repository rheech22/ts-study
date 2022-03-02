{
  // Java: Exception
  // Javascript: Error 
  // const array = new Array(99999999999999999999);

  // Error(Exception) handling: try => catch => finally
  function readFile(fileName: string): string{
    if(fileName === 'none') throw new Error('file not exist! ${fileName}');
    return 'File Content';
  }

  function closeFile() {
    console.log('closed!');
  }

  function run() {
    const fileName = 'none';
    try {
      readFile(fileName);
    } catch (error) {
      console.log('caught!!');
      return
    } finally {
      closeFile();
    }
  }

  run();
}