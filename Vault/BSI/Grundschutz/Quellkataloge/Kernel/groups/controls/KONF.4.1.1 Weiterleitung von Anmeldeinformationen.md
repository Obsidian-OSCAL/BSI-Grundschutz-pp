---
tags:
- produktbeschreibung_lateral_movement
- oscal_control
class: BSI-Stand-der-Technik-Kernel
type: control
control: KONF.4.1.1 Weiterleitung von Anmeldeinformationen
parent_control: KONF.4.1 Anbindung an Verzeichnisdienst
stmt_target_object_category: IT-Systeme
stmt_modal_verb: SOLLTE
stmt_action_word: deaktivieren
stmt_documentation: Konfigurationshistorie
control_effort_level: '4'
---


** Control ** der Klasse "BSI-Stand-der-Technik-Kernel"
# KONF.4.1.1 - Weiterleitung von Anmeldeinformationen
> [!example]- Tags:> [[tags_Produktbeschreibung|Produktbeschreibung]]> [[tags_Lateral_Movement|Lateral Movement]]
Gruppe: [KONF.4 Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md)
---

** Übergeordnetes Control: ** [KONF.4.1 Anbindung an Verzeichnisdienst](BSI/Grundschutz/Quellkataloge/Kernel/groups/controls/KONF.4.1%20Anbindung%20an%20Verzeichnisdienst.md)
### Statement
|  Gruppe | Praktik | Zielobjekt | Modalverb | Ergebnis | Präzisierung Ergebnis | Handlungswort | Dokumentation |
| - | - | - | - | - | - | - | - |
| <div style="background:#cccccc">*[Konfiguration (KONF)](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF%20Konfiguration.md)*<br> *  &rarr; [Vertrauenswürdige Basisdienste](BSI/Grundschutz/Quellkataloge/Kernel/groups/KONF.4%20Vertrauenswürdige%20Basisdienste.md) *</div> | [Konfiguration](practices_Konfiguration_8e46d34c-5145-44f8-882e-790e2dcffa09) | [IT-Systeme](target_object_categories_IT-Systeme_427da6dd-d744-4b2b-88b7-f0a695f21e14) | [SOLLTE](modal_verbs_SOLLTE_a04a4855-3a63-4f06-b2f4-fc4d94aee2cf) | die Weiterleitung mehrfach verwendbarer Anmeldeinformationen |  | [deaktivieren](action_words_deaktivieren_5f0f5c35-65a5-4db2-9b27-0d86c2d7089b) | [Konfigurationshistorie](documentation_guidelines_Konfigurationshistorie) | &mapsto;<span style="display:inline-block;border:1px solid;margin-left:8pt;padding:8pt;vertical-align:top;max-width:90%;">Konfiguration für IT-Systeme SOLLTE die Weiterleitung mehrfach verwendbarer Anmeldeinformationen deaktivieren.</span>

> [!info]- Guidance
>„Weiterleitung mehrfach verwendbarer Anmeldeinformationen“ (auch als Credential Forwarding oder Credential Delegation bekannt) meint technische Mechanismen, bei denen die Anmeldeinformationen eines Zugangskontos (z.B. Kennworthashes oder Kerberos-Tickets) an ein zweites System weitergereicht werden, um sich dort ebenfalls zu authentifizieren, ohne die Daten erneut eingeben zu müssen. Ziel der Deaktivierung ist hier die Unterbrechung von Angriffsketten, die auf dem Diebstahl von Zugangsdaten basieren. Ein Angreifer könnte sonst nach der Kompromittierung eines weniger kritischen Systems, wie einem Webserver, die dorthin weitergeleiteten Anmeldeinformationen eines Administrators aus dem Arbeitsspeicher auslesen und sich mit diesen Rechten unbemerkt im gesamten Netzwerk weiter ausbreiten (Laterale Bewegung). Das gezielte Deaktivieren des Credential Forwarding kann die Angriffsfläche erheblich reduzieren und solche „Pass-the-Hash“- oder „Pass-the-Ticket“-Angriffe effektiv eindämmen, da Anmeldeinformationen mit hohen Privilegien gar nicht erst auf unsichere Systeme gelangen. Stattdessen kann die Authentifizierung ausschließlich temporäre, eingeschränkte Tickets oder Tokens verwenden. Hierzu gehören z.B. Windows Remote Credential Guard oder RestrictedAdmin, sowie unter Linux SSH-Agent Forwarding oder GSSAPI. Eine Token-basierte Authentifizierung ist eine Strategie zur Verbesserung der Informationssicherheit. Nachdem Benutzende ihre Anmeldedaten eingegeben haben, werden diese überprüft und ein einmaliges verschlüsseltes Token generiert, mit dem sie anschließend auf Online-Ressourcen zugreifen können, ohne bei jeder Anfrage ihren Benutzernamen und ihr Passwort eingeben zu müssen. Bei SSH-Verbindungen kann die unsichere „Agent Forwarding“-Funktion serverseitig in der Konfigurationsdatei deaktiviert werden.

### Weitere Informationen


> [!info]- Properties> |  | |> | - | - |> | ** Alternate Identifier ** | 6089e247-2518-4c90-b991-df8cbb24585f |> | ** Security Level** | [normal-SdT](security_level_normal-SdT) |> | ** Effort Level ** | [4](effort_level_4) |> | ** Alternate Identifier ** | 6089e247-2518-4c90-b991-df8cbb24585f |
