---
tags: Cryptography
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.16.2 Beglaubigung
parent_control: BER.7.16 Vorgaben für die Schlüsselbeglaubigung
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.16.2 - Beglaubigung
Tags: "[Cryptography](tags_Cryptography)"
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md)
---

** Übergeordnetes Control: ** [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
### Statement
|  Praktik / Gruppe | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - |
| **[Berechtigung (BER)](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER%20Berechtigung.md)**<br> ***  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/BER.7%20Schlüsselmanagement.md) *** |  | SOLLTE | den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung | bei Beantragung einer Beglaubigung | testen | IT-Betriebskonzept | >Berechtigung SOLLTE den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung bei Beantragung einer Beglaubigung testen.

> [!info]- Guidance
>Schlüsselbeglaubigung (engl. key certification) ist der kryptographische Nachweis, dass ein kryptographischer Schlüssel echt, unverändert und einer berechtigten Identität eindeutig zugeordnet ist. Der Schlüsseltest vor der Beglaubigung dient dazu, sicherzustellen, dass der einzureichende Schlüssel die festgelegten technischen und organisatorischen Vorgaben für die Genehmigung der Beglaubigung erfüllt – etwa hinsichtlich Schlüssellänge, Algorithmuskompatibilität oder Integrität der Schlüsseldaten. Solche Prüfungen können die korrekte Formatierung, die Funktionsfähigkeit innerhalb der vorgesehenen Kryptosysteme sowie den Abgleich mit vertrauenswürdigen Referenzen umfassen. Ziel ist die Gewährleistung, dass keine fehlerhaften, kompromittierten oder absichtlich manipulierten Schlüssel in eine Vertrauenskette eingebracht werden.  Diese Vorgabe kann das Risiko reduzieren, dass fehlerhafte oder bösartig erzeugte Schlüssel zu einer Täuschung über die Identität oder zu unbemerkten Datenmanipulationen führen könnte. Ebenso kann sie verhindern, dass ein unzureichend geprüfter Schlüssel später als gültig angesehen wird, obwohl er kompromittiert ist. Eine konsequente Umsetzung kann die Integrität kryptographischer Infrastrukturen stärken und die Vertrauenswürdigkeit digitaler Signaturen, Authentifizierungen und Verschlüsselungsprozesse sichern. In der Praxis kann dies etwa durch automatisierte Validierungsroutinen in einer Public-Key-Infrastruktur (PKI), durch den Einsatz spezialisierter HSM-Testwerkzeuge oder durch manuelle Prüfung anhand festgelegter Zertifizierungsrichtlinien erfolgen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 921cdb15-bf12-4a04-98f0-3bb7af3628d6 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 921cdb15-bf12-4a04-98f0-3bb7af3628d6 |

> [!info]- Links> > required: [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Anwenderkatalog/Grundschutz++/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
