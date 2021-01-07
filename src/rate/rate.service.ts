import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class RateService {
  constructor(private readonly httpService: HttpService) {}

  private async getUserAccountId(nickname: string): Promise<string> {
    try {
      let userAccountData: any = await this.httpService
        .get(
          `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${encodeURI(
            nickname,
          )}`,
          { headers: { 'X-Riot-Token': process.env.RIOT_TOKEN } },
        )
        .toPromise();
      return userAccountData.data.accountId;
    } catch (err) {
      return err;
    }
  }

  private async getUserMatchList(accountId: string): Promise<any> {
    let userMatchList: any = await this.httpService
      .get(
        `https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=20`,
      )
      .toPromise();
  }

  async getWinningRate(nickname: string) {
    return await this.getUserAccountId(nickname);
  }
}
