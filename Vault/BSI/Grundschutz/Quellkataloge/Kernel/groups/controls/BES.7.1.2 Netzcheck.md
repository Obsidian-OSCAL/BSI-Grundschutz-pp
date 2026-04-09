---
tags: Lieferketten
class: BSI-Stand-der-Technik-Kernel
type: control
control: BES.7.1.2 Netzcheck
parent_control: BES.7.1 Eingangskontrolle
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BES.7.1.2 - Netzcheck
Tags: "[Lieferketten](tags_Lieferketten)"
Gruppe: [BES.7 Abnahme](BSI/Grundschutz/Quellkataloge/Kernel/groups/BES.7%20Abnahme.md)
---

** Übergeordnetes Control: ** [BES.7.1 Eingangskontrolle](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BES.7.1%20Eingangskontrolle.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Beschaffungsmanagement (BES)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BES%20Beschaffungsmanagement.md)**<br> ***  &rarr; [Abnahme](BSI/Grundschutz/Quellkataloge/Kernel/groups/BES.7%20Abnahme.md) *** | Outsourcing | SOLLTE | die Umsetzung der geforderten Beschaffungskriterien für die Netzanbindung | vor der Netzanbindung | testen | Abnahmeprotokoll | >Beschaffungsmanagement für Outsourcing SOLLTE die Umsetzung der geforderten Beschaffungskriterien für die Netzanbindung vor der Netzanbindung testen.

> [!info]- Guidance
>Netzanbindung meint hier jede Form der logischen oder physischen Kopplung von Netzwerken – etwa über VPN, MPLS, dedizierte Leitungen oder Cloud-Interconnects. Der Sinn dieser Vorschrift liegt darin, Risiken aus unsicheren oder ungetesteten Dienstleisterverbindungen zu minimieren. So könnte ein ungeprüfter Zugang über eine unsauber konfigurierte VPN-Schnittstelle Schadsoftware einschleusen oder interne Systeme unautorisiert zugänglich machen. Umgekehrt kann die vorgelagerte Prüfung sicherstellen, dass Verschlüsselung, Bandbreite, Trennung sensibler Netze oder auch Logging-Vorgaben wie vorgesehen funktionieren und dadurch ein sicherer, nachvollziehbarer Betrieb gewährleistet wird. Die Umsetzung kann durch mehrere Maßnahmen erfolgen: (1) Vor der Inbetriebnahme kann ein technischer Funktionstest durchgeführt werden, bei dem Firewalls, Routing und VPN-Tunnel anhand von Testaccounts überprüft werden. (2) Ein Abnahmetest durch die Institution kann beinhalten, dass simulierte Angriffe oder Fehlkonfigurationen (z. B. offene Ports) nachgestellt werden, um die Widerstandsfähigkeit des Dienstleisters zu prüfen. (3) Prozessual kann eine Checkliste genutzt werden, die verbindlich vorgibt, dass Sicherheitsanforderungen wie Verschlüsselungsstandards, Protokollierung, Redundanz oder die Einhaltung von Latenzgrenzen dokumentiert und validiert sind, bevor der „Go-Live“ erfolgt. Zusätzlich kann es hilfreich sein, die Ergebnisse der Tests nachvollziehbar in einem Freigabeprotokoll festzuhalten, das sowohl die Institution als auch der Dienstleister unterzeichnen. Auf diese Weise kann die Institution sicherstellen, dass die Netzanbindung nicht nur formell, sondern auch praktisch den definierten Kriterien entspricht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 2e2346ed-c3fd-4c96-89f7-7ed920eb8d1a |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [3](effort_level_3) |> | ** Alternate Identifier ** | 2e2346ed-c3fd-4c96-89f7-7ed920eb8d1a |
