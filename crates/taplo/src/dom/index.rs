use super::node::Node;
use crate::private::Sealed;

pub trait Index: Sealed + core::fmt::Display {
    #[doc(hidden)]
    fn index_into(&self, v: &Node) -> Option<Node>;
}

impl Sealed for usize {}
impl Index for usize {
    fn index_into(&self, v: &Node) -> Option<Node> {
        if let Node::Array(arr) = v {
            let items = arr.items().read();
            items.get(*self).cloned()
        } else {
            None
        }
    }
}

impl Sealed for str {}
impl Index for str {
    fn index_into(&self, v: &Node) -> Option<Node> {
        if let Node::Table(table) = v {
            table.get(self)
        } else {
            None
        }
    }
}

impl Sealed for String {}
impl Index for String {
    fn index_into(&self, v: &Node) -> Option<Node> {
        if let Node::Table(table) = v {
            table.get(self)
        } else {
            None
        }
    }
}

impl<'a, T> Sealed for &'a T where T: ?Sized + Sealed {}
impl<'a, T> Index for &'a T
where
    T: ?Sized + Index,
{
    fn index_into(&self, v: &Node) -> Option<Node> {
        (**self).index_into(v)
    }
}
