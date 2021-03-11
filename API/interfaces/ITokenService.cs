using API.Entities;

namespace interfaces
{
    public interface ITokenService
    {
        string CreateToken(AppUser user);
    }
}