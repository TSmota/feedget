import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '532fabe0b6d7b5',
    pass: 'ffba8242626404',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ to, subject, body }: SendMailData): Promise<void> {

    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to,
      subject,
      html: body,
    });

  }
}