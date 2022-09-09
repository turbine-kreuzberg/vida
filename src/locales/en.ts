/**
 * Conventions:
 *
 * # Indices & direct matches
 *
 * Please use on first level only direct matches of labels. Within index, you might use indices for specific messages.
 *
 * Direct match example:
 *
 * hello => Hallo
 * clickThisButton => Click this button
 * ...
 *
 * Indices:
 *
 * index.widget_title => Vida Widget for domestic violence
 * index.contact_form.submit_button => Send
 * ...
 *
 * # Alphabetic order
 *
 * There is no better order for lang keys then alphabetic order. Please do not order by topic or something else, which
 * is a matter of taste.
 */
export default {
  back: 'Back',
  call_institution: 'Call: {institution}',
  find_a_safe_help_resource: 'Find a safe help resource',
  go_to_live_chat: 'Go to livechat',
  index: {
    vida_intro: `
      <p>
        This widget provides anonymous access to assistance for
        <strong>victims of domestic violence.</strong>
      </p>
      <p>
        This box will disappear immediately if you click the X button or type "ESC" on your
        keyboard or click outside of this popup.
      </p>
    `,
    vida_emergency_header: `
      If you or someone you know is in immediate danger, please call:
      <a href="tel:{emergencyNumber}">{emergencyNumber}</a>
    `
  }
};
