/**
 * A visit to a web page you care about (for example, a product page or landing page).
 * ViewContent tells you if someone visits a web page's URL, but not what they see or do on
 * that page. A person lands on a product details page.
 */
export default interface ViewContent {
  /**
   * city, don't use abbreviations
   */
  city?: string;
  /**
   * Category of the page/product.
   */
  content_category?: string;
  /**
   * Product IDs associated with the event, such as SKUs (e.g. ['ABC123', 'XYZ789']).
   */
  content_ids?: string[];
  /**
   * Name of the page/product.
   */
  content_name?: string;
  /**
   * Either product or product_group based on the content_ids or contents being passed. If the
   * IDs being passed in content_ids or contents parameter are IDs of products then the value
   * should be product. If product group IDs are being passed, then the value should be
   * product_group.
   */
  content_type?: ContentType;
  /**
   * An array of JSON objects that contains the quantity and the International Article Number
   * (EAN) when applicable, or other product or content identifier(s). id and quantity are the
   * required fields. e.g. [{'id': 'ABC123', 'quantity': 2}, {'id': 'XYZ789', 'quantity': 2}].
   */
  contents?: Content[];
  /**
   * country, don't use abbreviations
   */
  country?: string;
  /**
   * The currency for the value specified.
   */
  currency?: string;
  /**
   * number of adults
   */
  num_adults?: number;
  /**
   * number of children
   */
  num_children?: number;
  /**
   * region, don't use abbreviations
   */
  region?: string;
  /**
   * use YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
   */
  travel_end?: string;
  /**
   * Allows you to target people based on their travel dates (using a booking window).
   * Improves the landing experience with travel dates filled in (using template tags) use
   * YYYYMMDD, YYYY-MM-DD, YYYY-MM-DDThh:mmTZD or YYYY-MM-DDThh:mm:ssTZD
   */
  travel_start?: string;
  /**
   * The value of a user performing this event to the business.
   */
  value?: number;
}
