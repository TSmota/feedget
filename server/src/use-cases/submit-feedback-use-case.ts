import { FeedbacksRepository } from '../repositories/feedbacks-repository';
import { MailAdapter } from '../adapters/mail-adapter';

interface SubmitFeedbackUseCaseRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbackRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter,
  ) {
  }

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, comment, screenshot } = request;

    if (!type) {
      throw new Error('Type is required');
    }

    if (!comment) {
      throw new Error('Comment are required');
    }

    if (screenshot && !screenshot.startsWith('data:image/')) {
      throw new Error('Invalid screenshot');
    }

    await this.mailAdapter.sendMail({
      to: 'Potato <batata@email.com>',
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111;">`,
        `<p>Novo feedback do tipo ${type}</p>`,
        `<p>Comentário: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}" alt="Screenshot enviado pelo usuário" />` : '',
        `</div>`,
      ].join('\n'),
    });

    return this.feedbackRepository.create({ type, comment, screenshot });
  }
}