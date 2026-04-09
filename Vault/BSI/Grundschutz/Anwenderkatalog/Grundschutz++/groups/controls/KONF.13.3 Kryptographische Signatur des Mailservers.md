---
tags: Produktbeschreibung_Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.13.3 Kryptographische Signatur des Mailservers
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.13.3 - Kryptographische Signatur des Mailservers
Tags: "[Produktbeschreibung](tags_Produktbeschreibung)" "[Cryptography](tags_Cryptography)"
Gruppe: [KONF.13 Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md)
---

### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Konfiguration (KONF)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF%20Konfiguration.md)**<br> ***  &rarr; [Senden und Empfangen von Nachrichten](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/KONF.13%20Senden%20und%20Empfangen%20von%20Nachrichten.md) *** | E-Mail | SOLLTE | die Kryptographische Signatur des Mailservers |  | aktivieren | Konfigurationshistorie | >Konfiguration für E-Mail SOLLTE die Kryptographische Signatur des Mailservers aktivieren.

> [!info]- Guidance
>Die kryptographischen Signatur des Mailservers ist ein digitaler Stempel des versendenden Mailservers selbst, mit dem die Authentizität des sendenden Mailservers belegt wird. Ein bekannter technischer Standard hierfür ist DomainKeys Identified Mail (DKIM). Diese Signatur wird durch den absendenden Mailserver (oder einen vorgeschalteten Dienst) unter Verwendung eines privaten kryptographischen Schlüssels erzeugt. Der Empfänger kann die Signatur mit einem öffentlich zugänglichen Schlüssel, der typischerweise im Domain Name System (DNS) der sendenden Domain hinterlegt ist, verifizieren. Diese Schutzmaßnahme kann die Glaubwürdigkeit der E-Mails erhöhen und trägt zur Prävention von Risiken bei, wie dem Spoofing des Absenders: Ein Angreifer könnte ohne eine solche Signatur die Identität der Institution vortäuschen, was zu Phishing-Vorfällen führen könnte.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 0588d640-bda0-46d7-978e-6c742f098327 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 0588d640-bda0-46d7-978e-6c742f098327 |
