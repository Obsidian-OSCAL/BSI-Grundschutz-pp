---
tags:
- Zero_Trust_Advanced_Persistent_Threats_APT_Command__Control
- det4111-prm1
class: BSI-Stand-der-Technik-Kernel
type: control
control: DET.4.11.1 Authentifizierungsversuche an externen Schnittstellen
parent_control: DET.4.11 Anomalien in Netzen und am Perimeter
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# DET.4.11.1 - Authentifizierungsversuche an externen Schnittstellen
Tags: "[Zero Trust](tags_Zero Trust)" "[Advanced Persistent Threats (APT)](tags_Advanced Persistent Threats (APT))" "[Command & Control](tags_Command & Control)"
Gruppe: [DET.4 Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md)
---

** Übergeordnetes Control: ** [DET.4.11 Anomalien in Netzen und am Perimeter](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/DET.4.11%20Anomalien%20in%20Netzen%20und%20am%20Perimeter.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Detektion (DET)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET%20Detektion.md)**<br> ***  &rarr; [Überwachung von Aktivitäten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/DET.4%20Überwachung%20von%20Aktivitäten.md) *** | Externe Netzanschlüsse | KANN | Authentifizierungsversuche auf unauthorisierte Verbindungen | {{regelmäßig}} | überprüfen | Detektions-Konzept | >Detektion für Externe Netzanschlüsse KANN Authentifizierungsversuche auf unauthorisierte Verbindungen {{ insert: param, det.4.11.1-prm1 }} überprüfen.

> [!info]- Guidance
>Ohne solche Überprüfungen könnte ein Angreifer unbemerkt wiederholt Zugangsdaten erraten (Brute-Force- oder Wörterbuchangriffe) oder unautorisierte Geräte an Schnittstellen wie VPN-Gateways, Firewalls oder externen Modems anbinden. Auch ein unbemerktes Einschleusen von Schadsoftware über offene Remote-Desktop- oder SSH-Verbindungen könnte langfristig unentdeckt bleiben. Eine kontinuierliche Auswertung von Anmeldeversuchen kann dagegen Auffälligkeiten wie ungewöhnlich viele Fehlversuche, Anmeldungen aus geografisch atypischen Regionen oder Verbindungsaufbau außerhalb üblicher Betriebszeiten aufzeigen und so eine wirksame Schutzwirkung entfalten. Als Frist können Intervalle wie "täglich", "wöchentlich" oder "in Echtzeit" je nach Kritikalität des Anschlusses angemessen sein. Verbindungen sind hier unautorisiert, wenn Anzeichen vorliegen, dass sie von unautorisierten Personen oder von unautorisierten Systemen stammen. Die Überprüfung kann manuell oder durch automatische Analyse von Logdateien erfolgen. Empfehlenswert ist eine kontinuierliche Überwachung. Dabei kann z.B. nach ungewöhnlichen vielen fehlgeschlagenen Anmeldungen, veralteten Berechtigungen, Einwahlen von Adminaccounts, ungewöhnlichen Einwahlorten/IP-Adressbereichen/User Agents oder Uhrzeiten gesucht werden. Als Reaktion kommen z.B. Sperren betroffener Adressbereiche, die Abschaltung angegriffener Schnittstellen oder stärkere Authentifizierungsmechanismen wie Mehr-Faktor-Authentifizierung in Betracht.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 1fc84b56-0931-439d-9b5a-4642926e0d04 |> | ** Security Level** | [erhöht](security_level_erhöht) |> | ** Effort Level ** | [5](effort_level_5) |> | ** Alternate Identifier ** | 1fc84b56-0931-439d-9b5a-4642926e0d04 |
