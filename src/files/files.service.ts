import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import * as uuid from 'uuid';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = uuid.v4() + '.png';
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (error) {
      throw new HttpException(
        'File upload error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
