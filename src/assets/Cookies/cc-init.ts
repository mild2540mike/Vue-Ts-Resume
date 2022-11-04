const today: Date  = new Date();
const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
const currentUrl: string = window.location.href;

const config: { 

    current_lang: string,
    autorun: boolean,
    autoclear_cookies: boolean,
    languages: {
      en: {
        consent_modal: {
          title: string,
          description: string,          
          primary_btn: {
            text: string,
            role: string, // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: string,
            role: string, // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: string,
          save_settings_btn: string,
          accept_all_btn: string,
          reject_all_btn: string,
          close_btn_label: string,
          cookie_table_headers: [
            { col1: string},
            { col2: string },
            { col3: string },
            { col4: string },
          ],
          blocks: [
            {
              title: string,
              description: string            
            },
            {
              title: string,
              description: string,
              toggle: {
                value: string,
                enabled: boolean,
                readonly: boolean, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: string,
              description:  string,
              toggle: {
                value: string, // your cookie category
                enabled: boolean,
                readonly: boolean,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: string, // match all cookies starting with "_ga"
                  col2: string,
                  col3: string,
                  col4: string,
                  is_regex: boolean,
                },
                {
                  col1: string,
                  col2: string,
                  col3: string,
                  col4: string,
                },
              ],
            },
            {
              title: string,
              description: string
              toggle: {
                value: string,
                enabled: boolean,
                readonly: boolean,
              },
            },
            {
              title: string,
              description: string            
            },
          ],
        },
      },
    }
 } = {
    current_lang: "th",
    autorun: true,
    autoclear_cookies: true,
    languages: {
      en: {
        consent_modal: {
          title: "We use cookies!",
          description:
            'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
          primary_btn: {
            text: "Accept all",
            role: "accept_all", // 'accept_selected' or 'accept_all'
          },
          secondary_btn: {
            text: "Reject all",
            role: "settings", // 'settings' or 'accept_necessary'
          },
        },
        settings_modal: {
          title: "Cookie preferences",
          save_settings_btn: "Save settings",
          accept_all_btn: "Accept all",
          reject_all_btn: "Reject all",
          close_btn_label: "Close",
          cookie_table_headers: [
            { col1: "appCookies" },
            { col2: currentUrl },
            { col3: date },
            { col4: "cookies" },
          ],
          blocks: [
            {
              title: "Cookie usage 📢",
              description:
                'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.',
            },
            {
              title: "Strictly necessary cookies",
              description:
                "These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly",
              toggle: {
                value: "necessary",
                enabled: true,
                readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
              },
            },
            {
              title: "Performance and Analytics cookies",
              description:
                "These cookies allow the website to remember the choices you have made in the past",
              toggle: {
                value: "analytics", // your cookie category
                enabled: false,
                readonly: false,
              },
              cookie_table: [
                // list of all expected cookies
                {
                  col1: "^_ga", // match all cookies starting with "_ga"
                  col2: "google.com",
                  col3: "2 years",
                  col4: "description ...",
                  is_regex: true,
                },
                {
                  col1: "_gid",
                  col2: "google.com",
                  col3: "1 day",
                  col4: "description ...",
                },
              ],
            },
            {
              title: "Advertisement and Targeting cookies",
              description:
                "These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you",
              toggle: {
                value: "targeting",
                enabled: false,
                readonly: false,
              },
            },
            {
              title: "More information",
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
            },
          ],
        },
      },
    },
  };
   

initCookieConsent().run(config);