export default defineAppConfig({
  alpine: {
    title: 'Prajjwal Arora',
    description: 'Personal Portfolio of Prajjwal Arora',
    image: {
      src: '/social-card-preview.png',
      alt: 'An image showcasing my project.',
      width: 400,
      height: 300
    },
    header: {
      position: 'left', // possible value are : | 'left' | 'center' | 'right'
      logo: {
        path: '/logo-prajjwal.svg', // path of the logo
        pathDark: '/logo-dark-prajjwal.svg', // path of the logo in dark mode, leave this empty if you want to use the same logo
        alt: 'Prajjwal Arora' // alt of the logo
      }
    },
    footer: {
      credits: {
        // possible value are : true | false
        enabled: true,

        // our github repository
        repository: 'https://www.github.com/nuxt-themes/alpine',

        text: 'Prajjwal Arora'
      },
      navigation: true, // possible value are : true | false
      alignment: 'center', // possible value are : 'none' | 'left' | 'center' | 'right'
      message: 'Follow me on' // string that will be displayed in the footer (leave empty or delete to disable)
    },
    socials: {
      twitter: 'AroraPrajjwal',
      instagram: 'prajjwal.arora',

      linkedin: {
        icon: 'uil:linkedin',
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/company/nuxtlabs'
      },

      github: 'prajjwalarora'
    },
    form: {
      successMessage: 'Message sent. Thank you!'
    }
  }
})