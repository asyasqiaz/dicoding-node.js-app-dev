const { getUserInfo, getUserOrders, getUserCartItems } = require('./utils');

async function getUserData(userId) {
  /**
   * @TODO
   * Dapatkan nilai:
   *  1. `userInfo` dari fungsi `getUserInfo`
   *  2. `userOrders` dari fungsi `getUserOrders`
   *  3. `userCartItems` dari fungsi `getUserCartItems`
   *
   *  Kemudian kembalikan fungsi asinkron ini dengan nilai-nilai di atas dalam bentuk objek.
   *  Struktur objek yang diharapkan dari yang dikembalikan oleh fungsi ini:
   *  {
   *    userInfo: { ... }
   *    userOrders: [ ... ],
   *    userCartItems: [ ... ]
   *  }
   *
   *  Jika ada salah satu Promise yang rejected, kembalikan fungsi ini dengan nilai `null`.
   */
  const userInfoPromise = getUserInfo(userId);
  const UserOrdersPromise = getUserOrders(userId);
  const UserCartItemsPromise = getUserCartItems(userId);

  try {
    const [userInfo, userOrders, userCartItems] = await Promise.all([userInfoPromise, UserOrdersPromise, UserCartItemsPromise]);
    return {
      userInfo,
      userOrders,
      userCartItems
    };
  } catch (error) {
    return null;
  }
}

function main() {
  getUserData(1).then(console.log);
  getUserData(-1).then(console.log); // seharusnya mencetak "null"
}

main();
