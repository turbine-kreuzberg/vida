// noinspection HtmlUnknownTarget

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
    emergency_header: `
      If you or someone you know is in immediate danger, please call:
      <a href="tel:{emergencyNumber}">{emergencyNumber}</a>
    `,
    safe_link_note:
      'Warning this link will appear in your browser history. You are leaving anonymous mode here. Do you want to proceed?',
    widget_description: `
      <p>
        This widget provides anonymous access to assistance for
        <strong>victims of domestic violence.</strong>
      </p>
      <p>
        This box will disappear immediately if you click the X button or type "ESC" on your
        keyboard or click outside of this popup.
      </p>
    `
  },
  content_page: {
    about_this_widget: {
      title: 'About this Widget',
      content: `
        <h3>How can I host this widget on my site?</h3>
        <p>
          Go to <a href="https://github.com/turbine-kreuzberg/vida#readme">breakout git repository</a>
          to copy and paste a widget for your region and institution (ngo).
        </p>
      `
    },
    universal_hand_signal: {
      title: 'The Universal Hand Signal for Help',
      content: `
        <p>
          The universal "<strong>Signal for Help</strong>" is a simple one-handed sign someone can use to silently
          show they need help and want someone to check in with them in a safe way.
        </p>
        <p style="text-align: center">
          <img 
            style="display:inline-block; width: 75%; height: auto;" 
            alt="hand sign" 
            src="@public/img/hand-sign.png" />
        </p>
        <p>This can be used in a video call or video post, in a public place, etc.</p>
      `
    },
    what_can_you_do: {
      title: 'What can you do if someone signals to you?',
      content: `
        <p>
          If you see someone use the Signal for Help, check in with the person safely to find out what they
          need and want you to do.
        </p>
        <p>They may:</p>
        <ul>
          <li>want to talk or get information</li>
          <li>ask for help finding services</li>
          <li><strong>want to use your phone</strong> or device to search for help</li>
        </ul>
        <p>Please do not assume they want you to call the authorities. Let them take the lead.</p>
        <p>Ask questions that can be answered with "Yes" or "No."</p>
      `
    }
  }
};
