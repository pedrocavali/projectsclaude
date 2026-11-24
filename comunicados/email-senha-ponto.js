// E-mail individual com a senha provisória do RHiD, no visual do canal Pessoas.
// Substitui o template antigo. Usa as mesmas variáveis do script de envio:
// e() para escapar, p.primeiro, p.cpf, p.senha e ASSINATURA.
// Assunto sugerido: "Ponto: sua senha provisória do RHiD"

const LOGO_PESSOAS = 'https://lh3.googleusercontent.com/d/17IDhP4y2I6E4dVIY-Gsw6nZnF_t4qNGO';
const FONTE = "font-family:'Segoe UI',Helvetica,Arial,sans-serif";
const P = `margin:0 0 14px;${FONTE};font-size:15px;line-height:1.6;color:#4A4350`;

const html = `
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#F3F0F5"><tr><td align="center" style="padding:8px 0">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:600px;background:#FFFFFF;border-radius:12px;overflow:hidden">
    <tr><td style="height:6px;line-height:6px;font-size:0;background:#E6007E;background-image:linear-gradient(90deg,#F7A600,#E6007E,#8E1F8F)">&nbsp;</td></tr>
    <tr><td style="padding:24px 24px 4px">
      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tr>
        <td style="vertical-align:middle;padding-right:12px"><img src="${LOGO_PESSOAS}" alt="Pessoas · Camino School" width="52" height="52" style="display:block;width:52px;height:52px;border:0"></td>
        <td style="vertical-align:middle"><div style="${FONTE};font-size:24px;line-height:1;font-weight:800;color:#26202B">Pessoas<span style="color:#E6007E">.</span></div>
        <div style="${FONTE};font-size:12px;line-height:1.4;color:#8A8190;padding-top:4px">Camino School · o RH com você</div></td>
      </tr></table>
    </td></tr>
    <tr><td style="padding:16px 24px 0">
      <div style="${FONTE};font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#E6007E;margin:0 0 8px">Fique por dentro · Ponto</div>
      <h1 style="margin:0 0 18px;${FONTE};font-size:26px;line-height:1.25;font-weight:800;color:#26202B">Sua senha provisória do ponto</h1>
      <p style="${P}">Olá, ${e(p.primeiro)}!</p>
      <p style="${P}">O sistema de justificativas e consulta de ponto foi atualizado. Por isso, segue abaixo sua nova senha provisória. O acesso agora é feito pelo <strong style="color:#26202B">CPF</strong>.</p>

      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:6px 0 18px;background:#FBF6FB;border-radius:10px">
        <tr>
          <td style="${FONTE};font-size:13px;color:#8E1F8F;font-weight:700;padding:12px 16px;width:40%;vertical-align:top">Site</td>
          <td style="${FONTE};font-size:14px;line-height:1.5;color:#26202B;font-weight:600;padding:12px 16px;vertical-align:top"><a href="https://www.rhid.com.br/v2/" style="color:#8E1F8F">rhid.com.br/v2</a></td>
        </tr><tr>
          <td style="${FONTE};font-size:13px;color:#8E1F8F;font-weight:700;padding:12px 16px;border-top:1px solid #EFE3F0;width:40%;vertical-align:top">Tipo de acesso</td>
          <td style="${FONTE};font-size:14px;line-height:1.5;color:#26202B;font-weight:600;padding:12px 16px;border-top:1px solid #EFE3F0;vertical-align:top">Funcionário usando o CPF</td>
        </tr><tr>
          <td style="${FONTE};font-size:13px;color:#8E1F8F;font-weight:700;padding:12px 16px;border-top:1px solid #EFE3F0;width:40%;vertical-align:top">Login</td>
          <td style="${FONTE};font-size:14px;line-height:1.5;color:#26202B;font-weight:600;padding:12px 16px;border-top:1px solid #EFE3F0;vertical-align:top">Seu CPF, só números: ${e(p.cpf)}</td>
        </tr><tr>
          <td style="${FONTE};font-size:13px;color:#8E1F8F;font-weight:700;padding:12px 16px;border-top:1px solid #EFE3F0;width:40%;vertical-align:top">Senha provisória</td>
          <td style="${FONTE};font-size:18px;line-height:1.4;color:#26202B;font-weight:800;letter-spacing:.04em;padding:12px 16px;border-top:1px solid #EFE3F0;vertical-align:top">${e(p.senha)}</td>
        </tr>
      </table>

      <table role="presentation" cellpadding="0" cellspacing="0" style="margin:0 0 18px"><tr>
        <td style="background:#8E1F8F;border-radius:8px"><a href="https://www.rhid.com.br/v2/" style="display:inline-block;padding:12px 22px;${FONTE};font-size:14px;font-weight:700;color:#FFFFFF;text-decoration:none">Acessar o ponto</a></td>
      </tr></table>

      <p style="${P}">No primeiro acesso, o sistema vai pedir que você crie uma senha nova, com <strong style="color:#26202B">letras maiúsculas, minúsculas e números</strong>, e no mínimo 6 caracteres.</p>
      <p style="${P}">Pelo sistema você pode enviar atestados, justificar marcações e consultar seu espelho de ponto.</p>
      <p style="${P}">Ficou com dúvida? É só responder este e-mail.</p>
    </td></tr>
    <tr><td style="padding:6px 24px 26px">
      <div style="${FONTE};font-size:15px;line-height:1.5;color:#26202B">${ASSINATURA}</div>
    </td></tr>
    <tr><td style="padding:16px 24px;background:#FAF7FA;border-top:1px solid #EFE8F0">
      <p style="margin:0;${FONTE};font-size:12px;line-height:1.5;color:#8A8190">Este e-mail é pessoal e traz seus dados de acesso. Não encaminhe para outras pessoas.</p>
    </td></tr>
  </table>
</td></tr></table>`;
