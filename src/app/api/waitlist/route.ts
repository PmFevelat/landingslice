import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Vérifier que la clé API Resend est configurée
    if (!process.env.RESEND_API_KEY) {
      console.error('❌ RESEND_API_KEY environment variable is not set');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }
    const { firstName, lastName, email, company, comment } = await request.json();

    console.log('📧 Tentative d\'envoi d\'email:', { firstName, lastName, email, company, comment });

    // Validation basique
    if (!firstName || !lastName || !email) {
      console.log('❌ Champs manquants');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Envoyer l'email
    console.log('🚀 Envoi via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Slice Team <noreply@resend.dev>',
      to: ['pierre-marie.fevelat@hec.edu'],
      subject: '[SLICE] Nouvelle inscription waitlist',
              html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Nouvelle inscription Slice</title>
        </head>
        <body style="margin: 0; padding: 20px; background-color: #f5f5f5; font-family: Arial, sans-serif;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
                🎉 Nouvelle inscription Slice
              </h1>
            </div>
            
            <!-- Content -->
            <div style="padding: 30px;">
              <div style="background-color: #f8fafc; padding: 25px; border-radius: 6px; border-left: 4px solid #4F46E5;">
                <h2 style="color: #1e293b; margin: 0 0 20px 0; font-size: 18px;">
                  👤 Informations du contact
                </h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569; width: 120px;">Nom :</td>
                    <td style="padding: 8px 0; color: #1e293b;">${firstName} ${lastName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569;">Email :</td>
                    <td style="padding: 8px 0; color: #1e293b;">
                      <a href="mailto:${email}" style="color: #4F46E5; text-decoration: none;">${email}</a>
                    </td>
                  </tr>
                  ${company ? `
                  <tr>
                    <td style="padding: 8px 0; font-weight: 600; color: #475569;">Entreprise :</td>
                    <td style="padding: 8px 0; color: #1e293b;">${company}</td>
                  </tr>
                  ` : ''}
                </table>
                
                ${comment ? `
                <div style="margin-top: 20px;">
                  <h3 style="color: #475569; margin: 0 0 10px 0; font-size: 14px; font-weight: 600;">💬 Commentaire :</h3>
                  <div style="background-color: white; padding: 15px; border-radius: 4px; border: 1px solid #e2e8f0; font-style: italic; color: #374151;">
                    "${comment}"
                  </div>
                </div>
                ` : ''}
              </div>
              
              <!-- Call to action -->
              <div style="text-align: center; margin: 30px 0;">
                <a href="mailto:${email}" 
                   style="display: inline-block; background: linear-gradient(135deg, #4F46E5 0%, #6366F1 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600;">
                  📧 Répondre à ${firstName}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px; border-top: 1px solid #e2e8f0; text-align: center;">
              <p style="margin: 0; color: #64748b; font-size: 12px;">
                📅 Reçu le ${new Date().toLocaleString('fr-FR', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
              <p style="margin: 5px 0 0 0; color: #64748b; font-size: 12px;">
                🌐 Depuis le site web <strong>Slice</strong>
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `
    });

    if (error) {
      console.error('❌ Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Failed to send email', details: error },
        { status: 500 }
      );
    }

    console.log('✅ Email envoyé avec succès:', data);
    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 