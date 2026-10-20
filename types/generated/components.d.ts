import type { Schema, Struct } from '@strapi/strapi';

export interface AtomsLevelText extends Struct.ComponentSchema {
  collectionName: 'components_atoms_level_texts';
  info: {
    displayName: 'level-text';
  };
  attributes: {
    level: Schema.Attribute.String;
  };
}

export interface AtomsPhone extends Struct.ComponentSchema {
  collectionName: 'components_atoms_phones';
  info: {
    displayName: 'phone';
  };
  attributes: {
    icon_name: Schema.Attribute.String;
    phone: Schema.Attribute.BigInteger & Schema.Attribute.Required;
  };
}

export interface AtomsTableCell extends Struct.ComponentSchema {
  collectionName: 'components_atoms_table_cells';
  info: {
    displayName: 'TableCell';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    content: Schema.Attribute.RichText;
  };
}

export interface AtomsText extends Struct.ComponentSchema {
  collectionName: 'components_atoms_texts';
  info: {
    displayName: 'text';
  };
  attributes: {
    accent: Schema.Attribute.String;
  };
}

export interface MiscSendWhatsapp extends Struct.ComponentSchema {
  collectionName: 'components_misc_send_whatsapps';
  info: {
    displayName: 'send whatsapp';
  };
  attributes: {
    hidden: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    phone: Schema.Attribute.BigInteger &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'5555555555'>;
  };
}

export interface MoleculesButton extends Struct.ComponentSchema {
  collectionName: 'components_molecules_buttons';
  info: {
    description: '';
    displayName: 'Button';
  };
  attributes: {
    CTA: Schema.Attribute.String & Schema.Attribute.Required;
    iconName: Schema.Attribute.String;
    label: Schema.Attribute.String;
    size: Schema.Attribute.Enumeration<['xs', 'sm', 'md', 'lg']>;
    variant: Schema.Attribute.Enumeration<
      ['primary', 'outlined', 'outlined-negative']
    > &
      Schema.Attribute.DefaultTo<'primary'>;
  };
}

export interface MoleculesCardButton extends Struct.ComponentSchema {
  collectionName: 'components_molecules_card_buttons';
  info: {
    displayName: 'card-button';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false>;
    circle_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesFooterColumn extends Struct.ComponentSchema {
  collectionName: 'components_molecules_footer_columns';
  info: {
    description: '';
    displayName: 'footerColumn';
  };
  attributes: {
    groups: Schema.Attribute.Component<'molecules.footer-group-items', true>;
  };
}

export interface MoleculesFooterGroupItems extends Struct.ComponentSchema {
  collectionName: 'components_molecules_footer_group_items';
  info: {
    description: '';
    displayName: 'footerGroupItems';
  };
  attributes: {
    href: Schema.Attribute.String;
    items: Schema.Attribute.Component<'molecules.submenu-item-3', true>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesImage extends Struct.ComponentSchema {
  collectionName: 'components_molecules_images';
  info: {
    displayName: 'Image';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface MoleculesInfoAlert extends Struct.ComponentSchema {
  collectionName: 'components_molecules_info_alerts';
  info: {
    displayName: 'info-alert';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'sections.link', false>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesInformativeIcon extends Struct.ComponentSchema {
  collectionName: 'components_molecules_informative_icons';
  info: {
    description: '';
    displayName: 'informativeIcon';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    iconName: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface MoleculesMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_menu_items';
  info: {
    description: '';
    displayName: 'menu_item';
  };
  attributes: {
    href: Schema.Attribute.String;
    items: Schema.Attribute.Component<'molecules.submenu-item', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    linkText: Schema.Attribute.String;
  };
}

export interface MoleculesMenuLayout extends Struct.ComponentSchema {
  collectionName: 'components_molecules_menu_layouts';
  info: {
    displayName: 'menu_layout';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface MoleculesSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_molecules_submenu_items';
  info: {
    displayName: 'submenu_item';
  };
  attributes: {
    bold: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    items: Schema.Attribute.Component<'molecules.submenu-item-2', true>;
    label: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
  };
}

export interface MoleculesSubmenuItem2 extends Struct.ComponentSchema {
  collectionName: 'components_molecules_submenu_item_2s';
  info: {
    description: '';
    displayName: 'submenu_item_2';
  };
  attributes: {
    bold: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    items: Schema.Attribute.Component<'molecules.submenu-item-3', true>;
    label: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']>;
  };
}

export interface MoleculesSubmenuItem3 extends Struct.ComponentSchema {
  collectionName: 'components_molecules_submenu_item_3s';
  info: {
    description: '';
    displayName: 'submenu_item_3';
  };
  attributes: {
    bold: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_self'>;
  };
}

export interface MoleculesTableRow extends Struct.ComponentSchema {
  collectionName: 'components_molecules_table_rows';
  info: {
    displayName: 'TableRow';
    icon: 'filter';
  };
  attributes: {
    tableCell: Schema.Attribute.Component<'atoms.table-cell', true>;
  };
}

export interface OrganismsFaqs extends Struct.ComponentSchema {
  collectionName: 'components_organisms_faqs';
  info: {
    displayName: 'faqs';
    icon: 'bulletList';
  };
  attributes: {
    categoria_faq: Schema.Attribute.Relation<
      'oneToOne',
      'api::faq-category.faq-category'
    >;
    max_entries: Schema.Attribute.Integer;
    sortdate: Schema.Attribute.Enumeration<['erliest', 'latest']>;
  };
}

export interface OrganismsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_organisms_footer_sections';
  info: {
    description: '';
    displayName: 'footerSection';
  };
  attributes: {
    columns: Schema.Attribute.Component<'molecules.footer-column', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    images: Schema.Attribute.Media<'images', true>;
    links: Schema.Attribute.Component<'sections.link', true>;
    logo: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    phone: Schema.Attribute.Component<'atoms.phone', false>;
    position: Schema.Attribute.Enumeration<['left', 'center', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    social_medias: Schema.Attribute.Relation<
      'oneToMany',
      'api::social-media.social-media'
    >;
    title: Schema.Attribute.String;
  };
}

export interface OrganismsTab extends Struct.ComponentSchema {
  collectionName: 'components_organisms_tabs';
  info: {
    description: '';
    displayName: 'tab';
    icon: 'stack';
  };
  attributes: {
    cardlist: Schema.Attribute.Component<'sections.card-list', false>;
    tab_label: Schema.Attribute.String;
  };
}

export interface OrganismsTabList extends Struct.ComponentSchema {
  collectionName: 'components_organisms_tabs_lists';
  info: {
    description: '';
    displayName: 'Pesta\u00F1as con lista de tarjetas';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    tabs: Schema.Attribute.Component<'organisms.tab', true>;
    textAlign: Schema.Attribute.Enumeration<['center', 'left']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAccordion extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordions';
  info: {
    description: '';
    displayName: 'Accordion';
  };
  attributes: {
    accordionItems: Schema.Attribute.Component<'sections.accordion-item', true>;
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAccordionItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_accordion_items';
  info: {
    description: '';
    displayName: 'AccordionItem';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsAlert extends Struct.ComponentSchema {
  collectionName: 'components_sections_alerts';
  info: {
    description: '';
    displayName: 'Alert';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    links: Schema.Attribute.Component<'sections.link', true>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_banners';
  info: {
    description: '';
    displayName: 'Banner';
    icon: 'audio-description';
  };
  attributes: {
    contentVariant: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'light'>;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    desktopRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'7/2'>;
    mobileImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'4/3'>;
    overlay: Schema.Attribute.Enumeration<['none', 'white', 'black']>;
    subtitle: Schema.Attribute.String;
    tabletImage: Schema.Attribute.Media<'images'>;
    tabletRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'7/2'>;
    textPosition: Schema.Attribute.Enumeration<
      [
        'center',
        'center top',
        'center bottom',
        'left top',
        'left center',
        'left bottom',
        'right top',
        'right center',
        'right bottom',
      ]
    > &
      Schema.Attribute.DefaultTo<'left top'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBannerCards extends Struct.ComponentSchema {
  collectionName: 'components_sections_banner_cards';
  info: {
    description: '';
    displayName: 'Banner contenedor de tarjetas';
    icon: 'apps';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false>;
    cardIconItem: Schema.Attribute.Component<'sections.card-icon', true>;
    description: Schema.Attribute.Blocks;
    desktopImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    mobileImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    tabletImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsBannerNumeralia extends Struct.ComponentSchema {
  collectionName: 'components_sections_banner_numeralias';
  info: {
    description: '';
    displayName: 'BannerNumeralia';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'>;
    overlay: Schema.Attribute.Enumeration<['none', 'white', 'dark']> &
      Schema.Attribute.DefaultTo<'dark'>;
    statistics: Schema.Attribute.Component<'sections.statistics-card', true> &
      Schema.Attribute.SetMinMax<
        {
          max: 4;
        },
        number
      >;
    subtitle: Schema.Attribute.Text;
    tabletImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
    imageAspectRatio: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'2/1'>;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.Text;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['vertical', 'horizontal']> &
      Schema.Attribute.DefaultTo<'vertical'>;
  };
}

export interface SectionsCardIcon extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_icons';
  info: {
    description: '';
    displayName: 'CardIcon';
    icon: 'picture';
  };
  attributes: {
    iconColor: Schema.Attribute.String;
    IconName: Schema.Attribute.String;
    RichText: Schema.Attribute.Blocks;
  };
}

export interface SectionsCardList extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_lists';
  info: {
    description: '';
    displayName: 'Lista de tarjetas';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.card', true>;
    sectionSubtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCardsDetailContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_detail_contents';
  info: {
    description: '';
    displayName: 'CardsDetailContent';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.card', true>;
    description: Schema.Attribute.Blocks;
    links: Schema.Attribute.Component<'sections.link', true>;
    textPosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'left'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCardsStatistics extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_statistics';
  info: {
    description: '';
    displayName: 'CardsStatistics';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.card', true>;
    cardsPosition: Schema.Attribute.Enumeration<['right', 'left']> &
      Schema.Attribute.DefaultTo<'left'>;
    description: Schema.Attribute.Blocks;
    descriptionCards: Schema.Attribute.Blocks;
    descriptionStatistics: Schema.Attribute.Blocks;
    statistics: Schema.Attribute.Component<'sections.statistics-card', true>;
    title: Schema.Attribute.String;
    titleCards: Schema.Attribute.String;
    titleStatistics: Schema.Attribute.String;
  };
}

export interface SectionsCardsVideoContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_cards_video_contents';
  info: {
    description: '';
    displayName: 'CardsVideoContent';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false>;
    cards: Schema.Attribute.Component<'sections.card', true>;
    subtitle: Schema.Attribute.Blocks;
    textPosition: Schema.Attribute.Enumeration<['right', 'left']>;
    title: Schema.Attribute.String;
    videoItem: Schema.Attribute.Component<'sections.video-item', false>;
  };
}

export interface SectionsCarousel extends Struct.ComponentSchema {
  collectionName: 'components_sections_carousels';
  info: {
    description: '';
    displayName: 'Carousel';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    button: Schema.Attribute.Component<'molecules.button', false>;
    cards: Schema.Attribute.Component<'sections.card', true>;
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'sections.mediaquery-images', true>;
    origin: Schema.Attribute.Enumeration<['center', 'auto']> &
      Schema.Attribute.DefaultTo<'center'>;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['card', 'image']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'card'>;
  };
}

export interface SectionsColorCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_color_cards';
  info: {
    description: '';
    displayName: 'colorCard';
  };
  attributes: {
    classNames: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    headline: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsColorCardList extends Struct.ComponentSchema {
  collectionName: 'components_sections_color_card_lists';
  info: {
    description: '';
    displayName: 'ColorCardList';
  };
  attributes: {
    alternativeText: Schema.Attribute.Blocks;
    cards: Schema.Attribute.Component<'sections.color-card', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactTargetCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_target_cards';
  info: {
    description: '';
    displayName: 'ContactTargetCard';
  };
  attributes: {
    email: Schema.Attribute.Email;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.String;
    phone: Schema.Attribute.String;
    textLink: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContactTargetList extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_target_lists';
  info: {
    description: '';
    displayName: 'Container-contactTargetList';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.contact-target-card', true>;
    description: Schema.Attribute.Blocks;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsContainerOutstandingList
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_container_outstanding_lists';
  info: {
    displayName: 'container-outstandingList';
  };
  attributes: {
    outstandings: Schema.Attribute.Component<'sections.outstanding', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsEventsCardContainer extends Struct.ComponentSchema {
  collectionName: 'components_sections_events_card_containers';
  info: {
    description: '';
    displayName: 'events card container';
  };
  attributes: {
    max_entries: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<5>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    description: '';
    displayName: 'Preguntas frecuentes';
    icon: 'layer';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    faqs: Schema.Attribute.Component<'organisms.faqs', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    description: '';
    displayName: 'hero';
    icon: 'ad';
  };
  attributes: {
    contentVariant: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.Required;
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    mobileImage: Schema.Attribute.Media<'images'>;
    overlay: Schema.Attribute.Enumeration<['none', 'white', 'black']>;
    subtitle: Schema.Attribute.String;
    tabletImage: Schema.Attribute.Media<'images'>;
    textPosition: Schema.Attribute.Enumeration<
      [
        'center',
        'center top',
        'center bottom',
        'left top',
        'left center',
        'left bottom',
        'right top',
        'right center',
        'right bottom',
      ]
    > &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSlider extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sliders';
  info: {
    description: '';
    displayName: 'Carrusel principal';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    slide: Schema.Attribute.Component<'sections.hero', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIconTextItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_icon_text_items';
  info: {
    description: '';
    displayName: 'IconTextItem';
  };
  attributes: {
    iconName: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIconTextListImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_icon_text_list_images';
  info: {
    description: '';
    displayName: 'Listado con iconos + texto e imagen';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    desktopImage: Schema.Attribute.Media<'images'>;
    iconTextList: Schema.Attribute.Component<'sections.icon-text-item', true>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    tabletImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsImageCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_cards';
  info: {
    description: '';
    displayName: 'imageCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    linkIconFirst: Schema.Attribute.String;
    linkIconSecond: Schema.Attribute.String;
    linkText: Schema.Attribute.String;
    linkUrl: Schema.Attribute.Text;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsImageCardList extends Struct.ComponentSchema {
  collectionName: 'components_sections_image_card_lists';
  info: {
    description: '';
    displayName: 'imageCardList';
  };
  attributes: {
    imageCards: Schema.Attribute.Component<'sections.image-card', true>;
    orientation: Schema.Attribute.Enumeration<['vertical', 'horizontal']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String;
  };
}

export interface SectionsIntroductionImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_introduction_images';
  info: {
    description: '';
    displayName: 'IntroductionImage';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'sections.mediaquery-images', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLeaderboard extends Struct.ComponentSchema {
  collectionName: 'components_sections_leaderboards';
  info: {
    description: '';
    displayName: 'Cintillo';
  };
  attributes: {
    button: Schema.Attribute.Component<'molecules.button', false>;
    contentVariant: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'light'>;
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    links: Schema.Attribute.Component<'sections.link', true>;
    mobileImage: Schema.Attribute.Media<'images'>;
    overlay: Schema.Attribute.Enumeration<['none', 'white', 'dark']>;
    subtitleIcon: Schema.Attribute.String;
    subtitleText: Schema.Attribute.Text;
    tabletImage: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_links';
  info: {
    description: '';
    displayName: 'Link';
  };
  attributes: {
    disabled: Schema.Attribute.Boolean;
    download: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    iconPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
    target: Schema.Attribute.Enumeration<['_self', '_blank']> &
      Schema.Attribute.DefaultTo<'_blank'>;
    text: Schema.Attribute.String;
  };
}

export interface SectionsLinkList extends Struct.ComponentSchema {
  collectionName: 'components_sections_link_lists';
  info: {
    description: '';
    displayName: 'Container-linkList';
  };
  attributes: {
    links: Schema.Attribute.Component<'sections.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsMediaqueryImages extends Struct.ComponentSchema {
  collectionName: 'components_sections_mediaquery_images';
  info: {
    description: '';
    displayName: 'mediaqueryImages';
  };
  attributes: {
    desktopImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    desktopRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2/1'>;
    mobileImage: Schema.Attribute.Media<'images'>;
    mobileRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'4/3'>;
    tabletImage: Schema.Attribute.Media<'images'>;
    tabletRatio: Schema.Attribute.String & Schema.Attribute.DefaultTo<'2/1'>;
  };
}

export interface SectionsMetaSocial extends Struct.ComponentSchema {
  collectionName: 'components_sections_meta_socials';
  info: {
    displayName: 'MetaSocial';
    icon: 'earth';
  };
  attributes: {
    description: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Schema.Attribute.Media<'images'>;
    socialNetwork: Schema.Attribute.Enumeration<['Facebook', 'Twitter']> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
  };
}

export interface SectionsModal extends Struct.ComponentSchema {
  collectionName: 'components_sections_modals';
  info: {
    displayName: 'Modal';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface SectionsMosaic extends Struct.ComponentSchema {
  collectionName: 'components_sections_mosaics';
  info: {
    description: '';
    displayName: 'Mosaic';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    images: Schema.Attribute.Component<'molecules.image', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsOutstanding extends Struct.ComponentSchema {
  collectionName: 'components_sections_outstandings';
  info: {
    description: '';
    displayName: 'OutstandingItem';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String & Schema.Attribute.Required;
    backgroundWidth: Schema.Attribute.Enumeration<['w-full', 'w-3/4']> &
      Schema.Attribute.DefaultTo<'w-full'>;
    button: Schema.Attribute.Component<'molecules.button', false>;
    content: Schema.Attribute.Blocks;
    contentVariant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
    image: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsOverlayCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_overlay_cards';
  info: {
    description: '';
    displayName: 'overlayCard';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    overlayColor: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SectionsOverlayCardList extends Struct.ComponentSchema {
  collectionName: 'components_sections_overlay_card_lists';
  info: {
    description: '';
    displayName: 'OverlayCardList';
  };
  attributes: {
    overlayCards: Schema.Attribute.Component<'sections.overlay-card', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsPixel extends Struct.ComponentSchema {
  collectionName: 'components_sections_pixels';
  info: {
    displayName: 'Pixel';
  };
  attributes: {
    element: Schema.Attribute.Enumeration<['iframe', 'img']>;
    src: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPrivacyPolicy extends Struct.ComponentSchema {
  collectionName: 'components_sections_privacy_policies';
  info: {
    displayName: 'privacyPolicy';
  };
  attributes: {
    file: Schema.Attribute.Media<'files'> & Schema.Attribute.Required;
    linkText: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface SectionsPromoLink extends Struct.ComponentSchema {
  collectionName: 'components_sections_promo_links';
  info: {
    description: '';
    displayName: 'PromoLinkItem';
  };
  attributes: {
    color: Schema.Attribute.String;
    link: Schema.Attribute.Text;
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsPromoLinkList extends Struct.ComponentSchema {
  collectionName: 'components_sections_promo_link_lists';
  info: {
    description: '';
    displayName: 'Container-PromoLinkList';
  };
  attributes: {
    ctaText: Schema.Attribute.String;
    ctaUrl: Schema.Attribute.String;
    promoLinks: Schema.Attribute.Component<'sections.promo-link', true>;
    title: Schema.Attribute.Text;
  };
}

export interface SectionsRepeatableBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_repeatable_banners';
  info: {
    description: '';
    displayName: 'RepeatableBanner';
  };
  attributes: {
    banners: Schema.Attribute.Component<'sections.banner', true>;
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text_images';
  info: {
    description: '';
    displayName: 'Texto e imagen';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'molecules.button', true>;
    contentVariant: Schema.Attribute.Enumeration<['light', 'dark']> &
      Schema.Attribute.DefaultTo<'dark'>;
    image: Schema.Attribute.Media<'images'>;
    imagePosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsRichTextImageBgImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text_image_bg_images';
  info: {
    description: '';
    displayName: 'RichTextImageBgImage';
  };
  attributes: {
    desktopBgImage: Schema.Attribute.Media<'images'>;
    mobileBgImage: Schema.Attribute.Media<'images'>;
    RichTextImage: Schema.Attribute.Component<
      'sections.rich-text-image',
      false
    >;
    tabletBgImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsRichTextVideo extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text_videos';
  info: {
    description: '';
    displayName: 'Texto y video';
  };
  attributes: {
    backgroundColor: Schema.Attribute.String;
    buttons: Schema.Attribute.Component<'molecules.button', true>;
    contentVariant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
    provider: Schema.Attribute.Enumeration<['Youtube', 'Vimeo']> &
      Schema.Attribute.DefaultTo<'Youtube'>;
    providerId: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    videoPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'left'>;
  };
}

export interface SectionsRichtextCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_richtext_cards';
  info: {
    displayName: 'Texto e Imagen con tarjeta';
    icon: 'layout';
  };
  attributes: {
    bg_image_desktop: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    bg_image_mobile: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    card: Schema.Attribute.Component<'molecules.card-button', false>;
    cardPosition: Schema.Attribute.Enumeration<['left', 'right']> &
      Schema.Attribute.DefaultTo<'right'>;
    contentVariant: Schema.Attribute.Enumeration<['dark', 'light']> &
      Schema.Attribute.DefaultTo<'dark'>;
    richtext: Schema.Attribute.Blocks;
  };
}

export interface SectionsRockstarInfo extends Struct.ComponentSchema {
  collectionName: 'components_sections_rockstar_infos';
  info: {
    description: '';
    displayName: 'RockstarInfo';
    icon: 'book';
  };
  attributes: {
    detail: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface SectionsRockstarInfoList extends Struct.ComponentSchema {
  collectionName: 'components_sections_rockstar_info_lists';
  info: {
    displayName: 'Tarjetas con Pop up';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    rockstars: Schema.Attribute.Component<'sections.rockstar-info', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsScriptPixel extends Struct.ComponentSchema {
  collectionName: 'components_sections_script_pixels';
  info: {
    description: '';
    displayName: 'ScriptPixel';
  };
  attributes: {
    async: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    crossorigin: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    enabled: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    integrity: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    pixel: Schema.Attribute.Component<'sections.pixel', false>;
    script: Schema.Attribute.Text;
    src: Schema.Attribute.String;
    strategy: Schema.Attribute.Enumeration<
      ['afterInteractive', 'beforeInteractive', 'lazyOnload', 'worker']
    > &
      Schema.Attribute.DefaultTo<'afterInteractive'>;
    triggerOnRouteChange: Schema.Attribute.Enumeration<
      ['gtagPageview', 'fbqPageview']
    >;
  };
}

export interface SectionsSeo extends Struct.ComponentSchema {
  collectionName: 'components_sections_seos';
  info: {
    displayName: 'seo';
    icon: 'file';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.String;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    metaRobots: Schema.Attribute.String;
    metaSocial: Schema.Attribute.Component<'sections.meta-social', true>;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface SectionsStatisticsCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_cards';
  info: {
    description: '';
    displayName: 'NumbersItem';
    icon: 'address-book';
  };
  attributes: {
    body: Schema.Attribute.String;
    color: Schema.Attribute.String;
    iconName: Schema.Attribute.String;
    maxNumber: Schema.Attribute.Integer;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    title: Schema.Attribute.String;
    variant: Schema.Attribute.Enumeration<['default', 'stroke', 'shadow']> &
      Schema.Attribute.DefaultTo<'default'>;
  };
}

export interface SectionsStatisticsCardList extends Struct.ComponentSchema {
  collectionName: 'components_sections_statistics_card_lists';
  info: {
    description: '';
    displayName: 'Numeralia';
    icon: 'bars';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.statistics-card', true> &
      Schema.Attribute.Required;
  };
}

export interface SectionsTable extends Struct.ComponentSchema {
  collectionName: 'components_sections_tables';
  info: {
    displayName: 'Table';
    icon: 'apps';
  };
  attributes: {
    tableBody: Schema.Attribute.Component<'molecules.table-row', true>;
    tableHead: Schema.Attribute.Component<'molecules.table-row', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_cards';
  info: {
    description: '';
    displayName: 'testimonialCard';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    testimonialImage: Schema.Attribute.Media<'images'>;
    testimonialText: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTestimonialSlider extends Struct.ComponentSchema {
  collectionName: 'components_sections_testimonial_sliders';
  info: {
    description: '';
    displayName: 'TestimonialSlider';
  };
  attributes: {
    bgImageDesktop: Schema.Attribute.Media<'images'>;
    bgImageMobile: Schema.Attribute.Media<'images'>;
    bgImageTablet: Schema.Attribute.Media<'images'>;
    description: Schema.Attribute.Blocks;
    testimonialCards: Schema.Attribute.Component<
      'sections.testimonial-card',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextContent extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_contents';
  info: {
    description: '';
    displayName: 'TextContent';
  };
  attributes: {
    subtitle: Schema.Attribute.String;
    text: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionsTextImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_text_images';
  info: {
    description: '';
    displayName: 'TextImage';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface SectionsVideoImage extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_images';
  info: {
    displayName: 'videoImage';
  };
  attributes: {
    Button: Schema.Attribute.Component<'molecules.button', false>;
    images: Schema.Attribute.Component<'molecules.image', true>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    Video: Schema.Attribute.Component<'sections.video-item', false>;
  };
}

export interface SectionsVideoItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_video_items';
  info: {
    displayName: 'VideoItem';
  };
  attributes: {
    provider: Schema.Attribute.Enumeration<['youtube', 'vimeo']> &
      Schema.Attribute.DefaultTo<'youtube'>;
    providerId: Schema.Attribute.String;
  };
}

export interface SectionsVideos extends Struct.ComponentSchema {
  collectionName: 'components_sections_videos';
  info: {
    description: '';
    displayName: 'Videos';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
    videos: Schema.Attribute.Component<'sections.video-item', true>;
  };
}

export interface SectionsWebError extends Struct.ComponentSchema {
  collectionName: 'components_sections_web_errors';
  info: {
    description: '';
    displayName: 'web error';
  };
  attributes: {
    button: Schema.Attribute.Component<'sections.link', false>;
    errorCode: Schema.Attribute.String;
    message: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'atoms.level-text': AtomsLevelText;
      'atoms.phone': AtomsPhone;
      'atoms.table-cell': AtomsTableCell;
      'atoms.text': AtomsText;
      'misc.send-whatsapp': MiscSendWhatsapp;
      'molecules.button': MoleculesButton;
      'molecules.card-button': MoleculesCardButton;
      'molecules.footer-column': MoleculesFooterColumn;
      'molecules.footer-group-items': MoleculesFooterGroupItems;
      'molecules.image': MoleculesImage;
      'molecules.info-alert': MoleculesInfoAlert;
      'molecules.informative-icon': MoleculesInformativeIcon;
      'molecules.menu-item': MoleculesMenuItem;
      'molecules.menu-layout': MoleculesMenuLayout;
      'molecules.submenu-item': MoleculesSubmenuItem;
      'molecules.submenu-item-2': MoleculesSubmenuItem2;
      'molecules.submenu-item-3': MoleculesSubmenuItem3;
      'molecules.table-row': MoleculesTableRow;
      'organisms.faqs': OrganismsFaqs;
      'organisms.footer-section': OrganismsFooterSection;
      'organisms.tab': OrganismsTab;
      'organisms.tab-list': OrganismsTabList;
      'sections.accordion': SectionsAccordion;
      'sections.accordion-item': SectionsAccordionItem;
      'sections.alert': SectionsAlert;
      'sections.banner': SectionsBanner;
      'sections.banner-cards': SectionsBannerCards;
      'sections.banner-numeralia': SectionsBannerNumeralia;
      'sections.card': SectionsCard;
      'sections.card-icon': SectionsCardIcon;
      'sections.card-list': SectionsCardList;
      'sections.cards-detail-content': SectionsCardsDetailContent;
      'sections.cards-statistics': SectionsCardsStatistics;
      'sections.cards-video-content': SectionsCardsVideoContent;
      'sections.carousel': SectionsCarousel;
      'sections.color-card': SectionsColorCard;
      'sections.color-card-list': SectionsColorCardList;
      'sections.contact-target-card': SectionsContactTargetCard;
      'sections.contact-target-list': SectionsContactTargetList;
      'sections.container-outstanding-list': SectionsContainerOutstandingList;
      'sections.events-card-container': SectionsEventsCardContainer;
      'sections.faq-section': SectionsFaqSection;
      'sections.hero': SectionsHero;
      'sections.hero-slider': SectionsHeroSlider;
      'sections.icon-text-item': SectionsIconTextItem;
      'sections.icon-text-list-image': SectionsIconTextListImage;
      'sections.image-card': SectionsImageCard;
      'sections.image-card-list': SectionsImageCardList;
      'sections.introduction-image': SectionsIntroductionImage;
      'sections.leaderboard': SectionsLeaderboard;
      'sections.link': SectionsLink;
      'sections.link-list': SectionsLinkList;
      'sections.mediaquery-images': SectionsMediaqueryImages;
      'sections.meta-social': SectionsMetaSocial;
      'sections.modal': SectionsModal;
      'sections.mosaic': SectionsMosaic;
      'sections.outstanding': SectionsOutstanding;
      'sections.overlay-card': SectionsOverlayCard;
      'sections.overlay-card-list': SectionsOverlayCardList;
      'sections.pixel': SectionsPixel;
      'sections.privacy-policy': SectionsPrivacyPolicy;
      'sections.promo-link': SectionsPromoLink;
      'sections.promo-link-list': SectionsPromoLinkList;
      'sections.repeatable-banner': SectionsRepeatableBanner;
      'sections.rich-text-image': SectionsRichTextImage;
      'sections.rich-text-image-bg-image': SectionsRichTextImageBgImage;
      'sections.rich-text-video': SectionsRichTextVideo;
      'sections.richtext-card': SectionsRichtextCard;
      'sections.rockstar-info': SectionsRockstarInfo;
      'sections.rockstar-info-list': SectionsRockstarInfoList;
      'sections.script-pixel': SectionsScriptPixel;
      'sections.seo': SectionsSeo;
      'sections.statistics-card': SectionsStatisticsCard;
      'sections.statistics-card-list': SectionsStatisticsCardList;
      'sections.table': SectionsTable;
      'sections.testimonial-card': SectionsTestimonialCard;
      'sections.testimonial-slider': SectionsTestimonialSlider;
      'sections.text-content': SectionsTextContent;
      'sections.text-image': SectionsTextImage;
      'sections.video-image': SectionsVideoImage;
      'sections.video-item': SectionsVideoItem;
      'sections.videos': SectionsVideos;
      'sections.web-error': SectionsWebError;
    }
  }
}
