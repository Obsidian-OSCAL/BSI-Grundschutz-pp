---
tags:
- cryptography
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: BER.7.16.2 Beglaubigung
parent_control: BER.7.16 Vorgaben für die Schlüsselbeglaubigung
stmt_modal_verb: SOLLTE
stmt_action_word: testen
stmt_documentation: IT-Betriebskonzept
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# BER.7.16.2 - Beglaubigung
Tag: [[tags_Cryptography|Cryptography]]
Gruppe: [BER.7 Schlüsselmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.7%20Schlüsselmanagement.md)
---

** Übergeordnetes Control: ** [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Berechtigung (BER)](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER%20Berechtigung.md)*<br> *  &rarr; [Schlüsselmanagement](BSI/Grundschutz/Quellkataloge/Kernel/groups/BER.7%20Schlüsselmanagement.md) *</div> | [Berechtigung](practices_Berechtigung_389cd5ad-fb81-4a95-8f7a-8f1fe1881709) |  | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung | bei Beantragung einer Beglaubigung | [testen](action_words_testen_db5f9334-97d0-4326-80f0-176348a3f165) | [IT-Betriebskonzept](documentation_guidelines_IT-Betriebskonzept) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Berechtigung SOLLTE den Schlüssel anhand der Vorgaben für die Schlüsselbeglaubigung bei Beantragung einer Beglaubigung testen.</span>

> [!info]- Guidance
>Schlüsselbeglaubigung (engl. key certification) ist der kryptographische Nachweis, dass ein kryptographischer Schlüssel echt, unverändert und einer berechtigten Identität eindeutig zugeordnet ist. Der Schlüsseltest vor der Beglaubigung dient dazu, sicherzustellen, dass der einzureichende Schlüssel die festgelegten technischen und organisatorischen Vorgaben für die Genehmigung der Beglaubigung erfüllt – etwa hinsichtlich Schlüssellänge, Algorithmuskompatibilität oder Integrität der Schlüsseldaten. Solche Prüfungen können die korrekte Formatierung, die Funktionsfähigkeit innerhalb der vorgesehenen Kryptosysteme sowie den Abgleich mit vertrauenswürdigen Referenzen umfassen. Ziel ist die Gewährleistung, dass keine fehlerhaften, kompromittierten oder absichtlich manipulierten Schlüssel in eine Vertrauenskette eingebracht werden.  Diese Vorgabe kann das Risiko reduzieren, dass fehlerhafte oder bösartig erzeugte Schlüssel zu einer Täuschung über die Identität oder zu unbemerkten Datenmanipulationen führen könnte. Ebenso kann sie verhindern, dass ein unzureichend geprüfter Schlüssel später als gültig angesehen wird, obwohl er kompromittiert ist. Eine konsequente Umsetzung kann die Integrität kryptographischer Infrastrukturen stärken und die Vertrauenswürdigkeit digitaler Signaturen, Authentifizierungen und Verschlüsselungsprozesse sichern. In der Praxis kann dies etwa durch automatisierte Validierungsroutinen in einer Public-Key-Infrastruktur (PKI), durch den Einsatz spezialisierter HSM-Testwerkzeuge oder durch manuelle Prüfung anhand festgelegter Zertifizierungsrichtlinien erfolgen.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 921cdb15-bf12-4a04-98f0-3bb7af3628d6 |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 921cdb15-bf12-4a04-98f0-3bb7af3628d6 |

> [!info]- Links> > required: [BER.7.16 Vorgaben für die Schlüsselbeglaubigung](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/BER.7.16%20Vorgaben%20für%20die%20Schlüsselbeglaubigung.md)
